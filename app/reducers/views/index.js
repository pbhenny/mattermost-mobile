// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {combineReducers} from 'redux';

import channel from './channel';
import i18n from './i18n';
import login from './login';
import optionsModal from './options_modal';
import selectServer from './select_server';
import thread from './thread';

export default combineReducers({
    channel,
    i18n,
    login,
    optionsModal,
    selectServer,
    thread
});
