import SearchPage from '~/app/components/search/Search'

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
