export default function App()
{
    let user = {
        firstname: 'Ada',
        lastname: 'Lovelace'
    };

    let value = 1;

    <input bindValue={user.firstname} />;
    <input bindValue={user.lastname} />;

    <debug>{[user, value]}</debug>;

    <h1>Hello {user.firstname}!</h1>;
}