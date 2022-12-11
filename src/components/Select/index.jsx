//Styled Components
import { StyledSelect } from "./styles";

import { useRef, useState } from "react";

export const Select = ({
	id,
	name,
	placeholder,
	setValue,
	options,
	register,
}) => {
	const [transform, setTransform] = useState(false),
		selectedOption = useRef(""),
		bottomPos = useRef(0);

	//Get option when click in select options
	const selectOption = (event) => {
		selectedOption.current = event.target.textContent;
		setValue("course_module", selectedOption.current, { shouldValidate: true });
	};

	return (
		<StyledSelect
			Transform={transform}
			BottomPos={bottomPos.current}
			ToggleList={transform}
		>
			<div
				className="selectContainer"
				onClick={(event) => {
					setTransform(transform === false);
					bottomPos.current =
						window.innerHeight - event.target.getBoundingClientRect().bottom;
				}}
			>
				<input
					type="text"
					id={id}
					name={name}
					value={selectedOption.current}
					placeholder={placeholder}
					{...register(name)}
					readOnly
				/>
				{transform && (
					<ul>
						{options.map((elm, i) => {
							return (
								<li
									key={i}
									onClick={(event) => {
										selectOption(event);
									}}
								>
									{elm.value}
								</li>
							);
						})}
					</ul>
				)}
			</div>
			<span></span>
		</StyledSelect>
	);
};
