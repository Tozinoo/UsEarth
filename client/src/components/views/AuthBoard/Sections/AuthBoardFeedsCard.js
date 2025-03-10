import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import AuthBoardComments from "./AuthBoardComments";
import Link from "@mui/material/Link";

export default function AuthBoardFeedsCard() {
    const user = useSelector((state) => state.user.userData);

    const [Data, setData] = useState([
        {
            authBody: "",
            photo: "",
            postedBy: "",
            likes: [],
            dislikes: [],
            comments: [],
            profileImage: "",
        },
    ]);
    const [lastIdx, setLastIdx] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/api/authboard");

                const _Data = await res.data.resultAuthBoards.map(
                    (rowData) => (
                        setLastIdx(lastIdx + 1),
                        {
                            _id: rowData._id,
                            authBody: rowData.authBody,
                            photo: rowData.photo,
                            postedBy: rowData.postedBy.nickname,
                            likes: rowData.likes,
                            dislikes: rowData.dislikes,
                            comments: rowData.comments,
                            profileImage: rowData.postedBy.profileImage,
                        }
                    )
                );

                setData(Data.concat(_Data));
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const likePost = (id) => {
        axios
            .put("/api/authBoard/like", {
                postId: id,
            })
            .then((result) => {})
            .catch((err) => {
                console.log(err);
            });
    };
    const dislikePost = (id) => {
        axios
            .put("/api/authBoard/dislike", {
                postId: id,
            })
            .then((result) => {})
            .catch((err) => {
                console.log(err);
            });
    };
    if (user) {
        return (
            <React.Fragment>
                {lastIdx !== 0 ? (
                    Data.filter((data) => data.authBody !== "").map(
                        (rowData, index) => (
                            <Card sx={{ maxWidth: 600 }} key={index}>
                                <Link
                                    href={`/profile/${rowData.postedBy}`}
                                    style={{
                                        textDecoration: "none",
                                        color: "black",
                                    }}
                                >
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="user">
                                                <img
                                                    src={rowData.profileImage}
                                                    style={{
                                                        width: "40px",
                                                        height: "40px",
                                                    }}
                                                    alt="프로필 이미지"
                                                />
                                            </Avatar>
                                        }
                                        title={rowData.postedBy}
                                        titleTypographyProps={{ variant: "h5" }}
                                    />
                                </Link>
                                <CardMedia
                                    component="img"
                                    height="400"
                                    image={rowData.photo}
                                />
                                <CardContent>
                                    <Link
                                        href={`/profile/${rowData.postedBy}`}
                                        style={{
                                            textDecoration: "none",
                                            color: "black",
                                        }}
                                    >
                                        <Typography
                                            variant="h7"
                                            color="black"
                                            fontWeight={600}
                                            sx={{ ml: 1, mr: 2 }}
                                        >
                                            {rowData.postedBy}
                                        </Typography>
                                    </Link>
                                    {"     "}
                                    {rowData.authBody}
                                </CardContent>
                                <CardActions disableSpacing>
                                    {rowData.postedBy === user.nickname ? (
                                        <>
                                            <Button
                                                variant="contained"
                                                className="AuthBoard-like-btn-area"
                                                style={{
                                                    background: "#3b5998",
                                                    fontWeight: "600",
                                                    color: "#aaaaaa",
                                                }}
                                                disabled={true}
                                            >
                                                인증 {rowData.likes.length}
                                            </Button>

                                            <Button
                                                variant="contained"
                                                className="AuthBoard-like-btn-area"
                                                style={{
                                                    background: "#a80000",
                                                    fontWeight: "600",
                                                    color: "#aaaaaa",
                                                }}
                                                disabled={true}
                                            >
                                                미흡 {rowData.dislikes.length}
                                            </Button>
                                        </>
                                    ) : (
                                        <>
                                            <div
                                                className="AuthBoard-like-btn"
                                                onClick={() => {
                                                    likePost(rowData._id);
                                                    window.location.reload();
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    className="AuthBoard-like-btn-area"
                                                    style={{
                                                        background: "#3b5998",
                                                        fontWeight: "600",
                                                    }}
                                                >
                                                    인증 {rowData.likes.length}
                                                </Button>
                                            </div>
                                            <div
                                                className="AuthBoard-dislike-btn"
                                                onClick={() => {
                                                    dislikePost(rowData._id);
                                                    window.location.reload();
                                                }}
                                            >
                                                <Button
                                                    variant="contained"
                                                    className="AuthBoard-like-btn-area"
                                                    style={{
                                                        background: "#e80000",
                                                        fontWeight: "600",
                                                    }}
                                                >
                                                    미흡{" "}
                                                    {rowData.dislikes.length}
                                                </Button>
                                            </div>
                                        </>
                                    )}
                                </CardActions>
                                <AuthBoardComments
                                    authBoards={rowData._id}
                                    commentsData={rowData.comments}
                                />
                            </Card>
                        )
                    )
                ) : (
                    <div style={{ textAlign: "center" }}>
                        <h1>Loading...</h1>
                    </div>
                )}
            </React.Fragment>
        );
    } else {
        return null;
    }
}
