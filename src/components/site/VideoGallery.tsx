import { Reveal } from "./Reveal";

const CLOUD_VIDEO = "https://res.cloudinary.com/idmvpeay/video/upload";

const YOUTUBE_IDS = ["zI9d-Jjzjg0", "ODi-yFSIe04", "TY830ivU77I", "NntzIr5wy-E"];

const CLOUDINARY_VIDEOS = [
  "v1785534615/video-7_it0xsc.mp4",
  "v1785534615/videos-8_dker8c.mp4",
  "v1785534613/video-9_ipo7e9.mp4",
  "v1785534608/video-4_feyfex.mp4",
  "v1785534606/videos-6_abv2ob.mp4",
  "v1785534608/videos-2_knztep.mp4",
  "v1785534609/video-10_rqk8ol.mp4",
  "v1785534612/videos-1_egb28f.mp4",
];

export function VideoGallery() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
      {YOUTUBE_IDS.map((id, i) => (
        <Reveal key={id} index={i}>
          <div className="relative aspect-video overflow-hidden bg-muted ring-1 ring-border/70 shadow-editorial">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${id}`}
              title="Patient story from our kidney hospital in China"
              loading="lazy"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </Reveal>
      ))}

      {CLOUDINARY_VIDEOS.map((path, i) => (
        <Reveal key={path} index={i}>
          <div className="relative aspect-video overflow-hidden bg-muted ring-1 ring-border/70 shadow-editorial">
            <video
              src={`${CLOUD_VIDEO}/${path}`}
              poster={`${CLOUD_VIDEO}/so_1,f_auto,q_auto,w_900/${path.replace(/\.mp4$/, ".jpg")}`}
              controls
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </Reveal>
      ))}
    </div>
  );
}
