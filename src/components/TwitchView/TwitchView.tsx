import {TwitchPlayer, TwitchChat} from 'react-twitch-embed';

import './TwitchView.scss';

const CHANNEL = 'gnumme';
const HOST = window.location.host;

export const TwitchView = () => {
    return (
        <div className="twitch-view">
            <TwitchPlayer className="twitch-view__player" height="_" width="_" channel={CHANNEL} parent={HOST} allowFullscreen />
            <TwitchChat className="twitch-view__chat" channel={CHANNEL} parent={HOST} darkMode />
        </div>
    )
}