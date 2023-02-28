import React, { useContext } from "react";

import Style from "./Input.module.css";

const Input = ({ inputType, title, placeholder, handleClick }) => {
	return (
		<div className={Style.input}>
			<p>{title}</p>
			{inputType === "text" ? (
				<div className={Style.input_box}>
					<input
						type="text"
						placeholder={placeholder}
						className={Style.input_box_form}
						onChange={handleClick}
					/>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default Input;
