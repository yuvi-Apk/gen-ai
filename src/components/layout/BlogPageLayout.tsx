import { Outlet } from "react-router-dom";
import Container from "./../ui/Container";

const BlogPageLayout = () => {
  return (
    <main className="min-h-screen bg-[#F2F2F2]">
      <Container>
        <Outlet />
      </Container>
    </main>
  );
};

export default BlogPageLayout;
