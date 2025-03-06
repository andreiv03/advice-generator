import { useCallback, useEffect, useState } from "react";
import { FaDiceFive } from "react-icons/fa";

import axios from "@utils/axios";
import styles from "@styles/components/advice.module.scss";

interface Advice {
	advice: string;
	id: string;
}

const Advice: React.FC = () => {
	const [advice, setAdvice] = useState<Advice | null>(null);
	const [loading, setLoading] = useState<boolean>(true);

	const fetchAdvice = useCallback(async () => {
		setLoading(true);

		try {
			const { data } = await axios.get("https://api.adviceslip.com/advice");
			setAdvice(data.slip);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		fetchAdvice();
	}, [fetchAdvice]);

	return (
		<div className={styles["advice"]}>
			{loading ? (
				<h2>Loading...</h2>
			) : advice && advice.id ? (
				<>
					<h3>Advice #{advice.id}</h3>
					<h2>"{advice.advice}"</h2>

					<div className={styles["delimitation"]}>
						<div className={styles["horizontal_line"]} />
						<div className={styles["vertical_line"]} />
						<div className={styles["vertical_line"]} />
						<div className={styles["horizontal_line"]} />
					</div>
				</>
			) : null}

			<div className={styles["button"]} onClick={fetchAdvice}>
				<FaDiceFive />
			</div>
		</div>
	);
};

export default Advice;
