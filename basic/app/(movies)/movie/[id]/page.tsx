export default function MovieDetailPage({ params }: { params: { id: string } }) {
    return (
        <div>
            <h1>Movie Detail</h1>
            <p>Movie ID: {params.id}</p>
        </div>
    );
}