import Search from '~/components/Search'

type Props = {
  params: {
    slug: string
  }
}

export default function RoomPage({ params }: Props) {
  return <Search roomId={params.slug} />
}
