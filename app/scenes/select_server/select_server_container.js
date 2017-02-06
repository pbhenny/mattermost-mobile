// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {bindActionCreators} from 'redux';

import navigationSceneConnect from '../navigationSceneConnect';

import {getClientConfig, getLicenseConfig} from 'service/actions/general';
import * as SelectServerActions from 'app/actions/views/select_server';

import SelectServer from './select_server';

function mapStateToProps(state) {
    const {config, license} = state.entities.general;
    const {config: configRequest, license: licenseRequest} = state.requests.general;

    return {
        ...state.views.selectServer,
        server: state.requests.general.server,
        configRequest,
        licenseRequest,
        config,
        license
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            ...SelectServerActions,
            getClientConfig,
            getLicenseConfig
        }, dispatch)
    };
}

export default navigationSceneConnect(mapStateToProps, mapDispatchToProps)(SelectServer);
