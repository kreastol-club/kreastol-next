
export default function NewsDetails({ params: { slug } }: { params: { slug: string } }) {
  return <>
    <h1>Detaild view of {slug}</h1>
  </>
}
