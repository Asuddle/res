import { faCalendar, faLocationDot } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import homeStyles from '../../styles/Home.module.scss';
import styles from '../../styles/gallery.module.scss';

const galleryArr = [
	{
		name: 'Launch Party',
		imageCount: 6,
		date: '14th september 2021',
		folder: '1',
	},
	{
		name: 'Past life regression therapy',
		imageCount: 25,
		date: '22nd march 2022',
		folder: '2',
	},
	{
		name: 'Second Party',
		imageCount: 25,
		date: '16th october 2021',
		folder: '3',
	},
	{
		name: 'Third Party',
		imageCount: 30,
		date: '17th january 2022',
		folder: '4',
	},
];
export default function GalleryCard({ idx, item }) {
	return (
		<div className={styles.cardWrapper}>
			<Image
				className='img-fluid'
				src={`/home/Gallery${idx + 1}.jpg`}
				alt=''
				layout='responsive'
				width='100%'
				height='100%'
				// objectFit='contain'
			/>
			<div className={styles.dataWrapper}>
				<p className={styles.eventDate}>
					<span>01</span>
					<br />
					Dec
				</p>
				<p className={styles.eventName}></p>
				{/* <p className={styles.eventDate}>{item.name}</p> */}
				<p className={styles.eventCaption}>
					lorem ipsum dsad asd asd as das das das d as das d dasd asdsa das das
					d asd ad as d
				</p>
				<div className={styles.eventInfo}>
					<p className={styles.venue}>
						<FontAwesomeIcon icon={faLocationDot} /> <span>Venue</span>
					</p>
					<p className={styles.calendar}>
						<FontAwesomeIcon icon={faCalendar} />
						<span>{item.date}</span>
					</p>
				</div>
			</div>
		</div>
	);
}
