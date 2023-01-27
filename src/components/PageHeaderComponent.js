import "../styles/PageHeaderComponent.css";

function PageHeaderComponent(props) {
    return (
        <div className="page-header-container">
            <img src={props.img} alt="page-header-img" />
            <span>{props.title}</span>
        </div>
    )
}

export default PageHeaderComponent;