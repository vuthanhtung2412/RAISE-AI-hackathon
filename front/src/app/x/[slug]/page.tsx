//BUG: This won't works since we are deploying use github pages, we can't have dynamic routes like this.

export async function generateStaticParams() {
  // However we can still pre-generate static pages
  // Replace these with your actual slug values
  return [
    { slug: 'first-post' },
    // Add all the slug values you want to pre-generate
  ]
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  return <div>My Post: {slug}</div>
}
