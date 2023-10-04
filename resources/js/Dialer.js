import ReactDOM from 'react-dom';
import { CSDialer } from "csdialler";

function Dialer({ apiKey, user_id, authAPI, open, env, wssServerEnv }) {
    console.warn("Dialer", { apiKey, user_id, authAPI, open, env, wssServerEnv })
    return (
        <CSDialer
            apiKey={apiKey}
            user_id={user_id}
            env={env}
            authAPI={authAPI}
            showFloatingIcon={true}
            open={open}
            wssServerEnv={wssServerEnv}
        />
    );
}

if (!document.getElementById('dialer')) {
    const dialerElement = document.createElement('div');
    dialerElement.setAttribute('id', 'dialer');
    document.body.appendChild(dialerElement);
    const props = {
        apiKey: window.CleverStack.api,
        user_id: window.CleverStack.user_id,
        authAPI: window.CleverStack.authAPI,
        open: window.CleverStack.open === "false",
        env: window.CleverStack.env,
        wssServerEnv: window.CleverStack.wssServerEnv,
    };

    ReactDOM.render(
        <Dialer {...props} />,
        document.getElementById('dialer')
    );
}
