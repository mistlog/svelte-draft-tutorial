export default function App()
{
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}

    <if condition={user.loggedIn}>
        <button onClick={toggle}>
		    Log out
	    </button>
    </if>;


    <if condition={!user.loggedIn}>
        <button onClick={toggle}>
		    Log in
	    </button>
    </if>;
}