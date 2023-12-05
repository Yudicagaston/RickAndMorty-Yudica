const error404 = "https://cdn.dribbble.com/users/1916180/screenshots/3875427/4041.jpg"
export default function NotFound(props) {

    return (
        <div>
            <img src={error404} alt="Not Found Error 404" />
        </div>
    )
}