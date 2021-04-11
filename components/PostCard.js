import Link from "next/link";
import { Icon,  Tag, TagGroup, IconButton } from "rsuite";

function PostCard() {
  return (
    <>
      <div className="post-entry-1 d-flex">
        <div className="contents order-md-1">
          <h2
            className="px-3"
            style={{ borderBottom: "1px solid #bbb", marginBottom: "1rem" }}
          >
            <a href="/single">
              News Needs to Meet Its Audiences Where They Are
            </a>
          </h2>
          <p className="mb-3 px-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            temporibus praesentium neque, voluptatum quam quibusdam.
          </p>
          {/* <IconButton icon={<Icon icon="arrow-right" />} placement="right">
            Next
          </IconButton> */}
            <Link href="/single">
                <a style={{}} className="m-3">Read more</a>
             </Link>
          <div className="post-meta px-3 pb-3">
            <span className="d-block">
              By<a href="#"> Rogers</a>
            </span>
            <div className="mt-3">
              
              <TagGroup>
                  <Tag color="cyan">Text</Tag>
                  <Tag color="cyan">Closable</Tag>
                  <Tag color="cyan">coding</Tag>
              </TagGroup>

            
            </div>
            

            
            {/* <span className="date-read">
              Jun 14 <span className="mx-1">&bullet;</span> 3 min read
              <span className="icon-star2"></span>
            </span> */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .post-entry-1 {
          box-shadow: -1px 3px 4px #ccc;
          border: 1px solid #eee;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
}

export default PostCard;
