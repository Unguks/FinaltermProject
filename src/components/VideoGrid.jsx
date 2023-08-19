function VideoGrid({ children }) {
    return ( 
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-3 mb-3 mx-4">
            { children }
        </div>
     );
}

export default VideoGrid;