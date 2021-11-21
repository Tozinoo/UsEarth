import React, { useEffect, useState } from "react";
import ProfileBody from "./Sections/ProfileBody";
import ProfileHead from "./Sections/ProfileHead";
import "./Profile.css";

import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Profile = () => {
    const user = useSelector((state) => state.user.userData);
    let urlParam = useParams();

    const [Data, setData] = useState([
        {
            photo: "",
            compliteAuth: "",
            wrongAuth: "",
            comments: [],
        },
    ]);
    const [PostStates, setPostStates] = useState({});
    const [lastIdx, setLastIdx] = useState(0);
    const [userImage, setUserImage] = useState("");

    useEffect(() => {
        const fetchData = async (e) => {
            try {
                const res = await axios.get(`/api/profile/${urlParam.id}`);

                const _Data = await res.data.userPosts.map(
                    (rowData) => (
                        setLastIdx(lastIdx + 1),
                        {
                            photo: rowData.photo,
                            compliteAuth: rowData.compliteAuth,
                            wrongAuth: rowData.wrongAuth,
                            comments: rowData.comments,
                        }
                    )
                );
                // console.log(res.data.postsState, "포스트 스테이트");
                setPostStates(res.data.postsState);
                setUserImage(res.data.profileImage);
                return setData(Data.concat(_Data));
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="Profile-container">
            <ProfileHead
                photoData={Data}
                userData={urlParam.id}
                postState={PostStates}
                userImage={userImage}
            />
            <ProfileBody photoData={Data} />
        </div>
    );
};

export default Profile;
