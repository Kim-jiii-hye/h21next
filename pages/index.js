import Seo from '../Component/Seo';
import ViewHome from '../Component/view/ViewHome';

export default function Home({ posts, book }) {
  return (
    <>
      <Seo title="한겨레21" />
      <ViewHome ho={posts.data.top[0].ho} wdate={posts.wdate} maindata={posts.data.top} book={book} />
    </>
  )

}
export const getServerSideProps = async () => {
  const res = await fetch(`http://mapi_h21-master.hani.co.kr/on/main`);
  const posts = await res.json();
  const res_book = await fetch(`http://mapi_h21-master.hani.co.kr/ho/latest`)
  const data_book = await res_book.json();
  const book = data_book.data;


  return {
    props: {
      posts,
      book//내용 전송
    },
  }
}
