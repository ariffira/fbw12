const TopMenu = () => {
    return (
        <div>
            {SiteName('My Website Name')}
            <div style={{ "display": "flex", "width": "400px", "justify-content": "space-around" }}>
                <a href="/home">Home</a>
                <a href="/profile">Profile</a>
            </div>
        </div>
    )
};

const SiteName = (website_name) => {
    return <h1>{website_name}</h1>
}

export default TopMenu;