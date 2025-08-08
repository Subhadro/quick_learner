import React from 'react';
import clsx from 'clsx';

const TitleComponent = ({
	title,
	size = '3xl',
	align = 'left',
	className = ''
}: {
	title: string;
	size?: string;
	align?: 'left' | 'center' | 'right';
	className?: string;
}) => {
	const sizeClass = `text-${size}`;
	const alignClass = align === 'center' ? 'text-center' :
		align === 'right' ? 'text-right' : 'text-left';

	return (
		<h1 className={clsx(sizeClass, 'font-bold mb-6', alignClass, className)}>
			{title}
		</h1>
	);
};

export default TitleComponent;
