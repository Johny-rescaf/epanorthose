import Link from "next/link";
import { Icon, Tag, TagGroup, IconButton } from "rsuite";

function PostCard({ data }) {
  return (
    <>
      <div className="post-entry-1 d-flex">
        <div className="contents order-md-1" style={{ width: "100%" }}>
          <h2
            className="px-3"
            style={{ borderBottom: "1px solid #bbb", marginBottom: "1rem" }}
          >
            <Link href={"/posts/" + data.id}>
              <a>{data.title}</a>
            </Link>
          </h2>
          <div className="px-3 mb-2">
            <span className="d-inline-block">
              Auteur:<strong className=""> {data.user.firstname + " " + data.user.lastname}</strong>
            </span>
            <span className="d-inline-block ml-3">
              Category:<a href="#"> {data.category.title}</a>
            </span>
          </div>
          <p className="mb-2 px-3">{data.summary}</p>
          <Link href={"/posts/" + data.id}>
            <a style={{}} className="m-3">
              Lire plus
            </a>
          </Link>
          <div className="post-meta px-3 pb-3">
            <div className="mt-3">
              <TagGroup>
                {data.tags.length > 0 &&
                  data.tags
                    .split(",")
                    .map((postTag) => <Tag color="cyan">{postTag}</Tag>)}
              </TagGroup>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .post-entry-1 {
          box-shadow: 0px 0px 8px 2px #ccc;
          border: 1px solid #eee;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

export default PostCard;
