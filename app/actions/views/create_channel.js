// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {handleSelectChannel} from './channel';
import {createChannel} from 'service/actions/channels';
import {getCurrentTeamId} from 'service/selectors/entities/teams';
import {getCurrentUserId} from 'service/selectors/entities/users';
import {cleanUpUrlable} from 'service/utils/channel_utils';

export function handleCreateChannel(displayName, purpose, header, type) {
    return async (dispatch, getState) => {
        const state = getState();
        const currentUserId = getCurrentUserId(state);
        const teamId = getCurrentTeamId(state);
        let channel = {
            team_id: teamId,
            name: cleanUpUrlable(displayName),
            display_name: displayName,
            purpose,
            header,
            type
        };

        channel = await createChannel(channel, currentUserId)(dispatch, getState);
        if (channel && channel.id) {
            handleSelectChannel(channel.id)(dispatch, getState);
        }
    };
}
