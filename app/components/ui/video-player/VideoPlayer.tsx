import { useAuth } from '@/shared/useAuth'
import { FC } from 'react'
import MaterialIcon from '../MaterialIcon'
import AuthPlaceholder from './AuthPlaceholder/AuthPlaceholder'
import usePlayer from './usePlayer'
import { IVideoPlayer } from './video-player.types'
import styles from './VideoPlayer.module.scss'

const VideoPlayer: FC<IVideoPlayer> = ({ slug, videoUrl }) => {
	const { user } = useAuth()
	const { actions, video, videoRef } = usePlayer()
	return (
		<div className={`${styles.wrapper} ${!user && 'h-120'}`}>
			{user ? (
				<>
					<video
						controls
						muted
						ref={videoRef}
						className={styles.video}
						src={videoUrl}
						preload="metadata"
					/>

					{/* <div className={styles.progressBarContainer}>
						<div style={{ width: `${video.progress}%` }} className={styles.progressBar} />
					</div>

					<div className={styles.controls}>
						<div>
							<button onClick={actions.revert}>
								<MaterialIcon name="MdHistory" />
							</button>

							<button onClick={actions.toggleVideo} className={styles.playButton}>
								<MaterialIcon name={video.isPlaying ? 'MdPause' : 'MdPlayArrow'} />
							</button>

							<button onClick={actions.fastForward}>
								<MaterialIcon name="MdUpdate" />
							</button>

							<div className={styles.timeControls}>
								<p className={styles.controlsTime}>
									{Math.floor(video.currentTime / 60) +
										':' +
										('0' + Math.floor(video.currentTime % 60)).slice(-2)}
								</p>
								<p> / </p>
								<p className={styles.controlsTime}>
									{Math.floor(video.videoTime / 60) +
										':' +
										('0' + Math.floor(video.videoTime % 60)).slice(-2)}
								</p>
							</div>
						</div>

						<div>
							<button onClick={actions.fullScreen}>
								<MaterialIcon name="MdFullscreen" />
							</button>
						</div>
					</div> */}
				</>
			) : (
				<AuthPlaceholder slug={slug} />
			)}
		</div>
	)
}

export default VideoPlayer
