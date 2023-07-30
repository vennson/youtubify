import SearchPage from '~/app/search'

type Props = {
  params: {
    slug: string
  }
}

export default function Room({ params }: Props) {
  return (
    <main>
      <SearchPage roomId={params.slug} />
    </main>
  )
}
