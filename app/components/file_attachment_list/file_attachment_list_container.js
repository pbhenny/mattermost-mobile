// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {makeGetFilesForPost} from 'service/selectors/entities/files';
import {loadFilesForPostIfNecessary} from 'app/actions/views/channel';
import {getTheme} from 'service/selectors/entities/preferences';

import FileAttachmentList from './file_attachment_list';

function makeMapStateToProps() {
    const getFilesForPost = makeGetFilesForPost();
    return function mapStateToProps(state, ownProps) {
        return {
            ...ownProps,
            files: getFilesForPost(state, ownProps),
            theme: getTheme(state)
        };
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            loadFilesForPostIfNecessary
        }, dispatch)
    };
}

export default connect(makeMapStateToProps, mapDispatchToProps)(FileAttachmentList);
