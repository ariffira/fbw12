import apple from '../apple.jpeg';

// function 1
const Picture1 = () => {
    return <img src={apple} width='200' height='200' />;

}
// function 2
const Picture2 = () => {
    return <img src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png" width="200" height="200" />;
}
// function 3
const Pictures = () => {
    return <img src="https://www.sammobile.com/wp-content/uploads/2019/03/keyguard_default_wallpaper_silver.png" width="200" height="200" />;
}
export default Pictures;
export { Picture1, Picture2 };