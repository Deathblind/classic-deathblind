import React, { SFC, memo, useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadPosts } from "../../wordpress/posts/posts.action";
import { RootState } from "../../store/root";
import { getPostsAsIds } from "../../wordpress/posts/posts.selector";
import { loadAuthors } from "../../wordpress/authors/authors.action";
import { Dispatch, Action } from "redux";
import { Item } from "../../youtube/youtube.interface";
import Helmet from "react-helmet";
import Sidebar from "./sidebar/sidebar";

export interface AllianceLevelingGuideProps {
    loadData: () => void;
    posts: number[];
    videos: Item[];
}

export const AllianceLevelingGuide: SFC<AllianceLevelingGuideProps> = memo(
    ({ loadData, posts }) => {
        useEffect(() => {
            loadData();
        }, [loadData]);

        return (
            <>
                <Helmet>
                    <title>Alliance Leveling Guide - Deathblind</title>
                </Helmet>

                <Sidebar />
            </>
        );
    }
);

const mapStateToProps = (state: RootState) => ({
    posts: getPostsAsIds(state)
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
    loadData: () => {
        dispatch(loadPosts());
        dispatch(loadAuthors());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllianceLevelingGuide);
