import { PODCAST } from "@/lib/const/podcast";
import { PodcastEpisode } from "contentlayer/generated";
import { SimpleEpisodeCard } from "./SimpleEpisodeCard";
import { podcastEpisodeImage } from "@/lib/podcast";
import { PodcastFeedHero } from "./PodcastFeedCallout";
import { memo } from "react";

type PodcastHeroProps = {
  /** the episode to be featured in this hero section */
  featuredEpisode?: PodcastEpisode;
  /** custom label to be displayed above the episode card */
  featuredLabel?: string;
};

export const PodcastHero = memo(
  ({ featuredEpisode, featuredLabel }: PodcastHeroProps) => (
    // <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-y-10 md:mx-20">
    <section className="flex flex-col md:flex-row items-center justify-center md:flex lg:flex gap-8 gap-y-10 lg:mx-32">
      <PodcastFeedHero
        title={PODCAST.name}
        href={"/podcast"}
        description={PODCAST.description}
      />

      {!!featuredEpisode && (
        <div className="grid gap-2 max-w-md mx-auto justify-center justify-items-center md:max-w-sm">
          <h2 className="font-semibold text-center text-3xl md:text-2xl">
            {featuredLabel ?? `Episode #${featuredEpisode.ep}`}
          </h2>

          <SimpleEpisodeCard
          priority={true}
            title={featuredEpisode.title}
            href={featuredEpisode.href}
            date={featuredEpisode.date}
            imageSrc={featuredEpisode.image ?? podcastEpisodeImage()}
            description={featuredEpisode.description}
            duration={featuredEpisode.duration}
          />
        </div>
      )}
    </section>
  ),
);
