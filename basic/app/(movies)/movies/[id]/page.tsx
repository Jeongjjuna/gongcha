import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info"
import MovieVideos from "../../../../components/movie-videos";

export async function generateMetadata({ params }) {
    const { id } = await params;
    /**
     * 캐싱이 되지 않는다면 2번 호출됨.(NextJS 15 이후로 defaul non caching)
     * MovieInfo 에서 호출1.
     * metadata 동적 호출2.
     */
    const movie = await getMovie(id);
    return {
        title: movie.title,
    }
}

export default async function MovieDetail({ params }) {
    const { id } = await params;

    return (
        <div>
            <Suspense fallback={<h1>Loading movie info</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading movie videos</h1>}>
                <MovieVideos id={id} />
            </Suspense>
        </div>
    );
}