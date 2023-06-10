'use client'

import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'

import { GlobalNav } from '@/components/common/Nav/GlobalNav'
import { ThemeSwitch } from '@/components/ui/ThemeSwitch'
import { useScrollOffsetTop } from '@/hooks/useScrollOffsetTop'

import { MobileNav } from '../../Nav/MobileNav'
import { MobileNavButton } from '../../Nav/MobileNav/MobileNavButton'

import s from './styles.module.css'

const BASE_HEIGHT = 80

export const GlobalHeader = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const ref = useRef(null)

	const { pageYOffsetTop, isScrollUp } = useScrollOffsetTop(ref)
	const isScrollingUp = BASE_HEIGHT > pageYOffsetTop || isScrollUp

	const handleChangeMenuOpen = () => {
		setIsMenuOpen((prev) => !prev)
	}

	const headerTranslateStyle = useMemo(() => {
		if (isScrollUp === undefined) {
			return {}
		} else if (isScrollingUp) {
			return {
				transform: 'translateY(0px)',
				transition: '0.5s',
			}
		} else {
			return {
				transform: 'translateY(-100px)',
				transition: '0.5s',
			}
		}
	}, [isScrollUp, isScrollingUp])

	return (
		<header ref={ref} className={s.header} style={headerTranslateStyle}>
			<div className={s.inner}>
				<Link className={s.rootLink} href="/">
					<img alt="asibi" height={20} src="/logo.svg" width={64} />
				</Link>
				<GlobalNav />
				<div>
					<div className={s.themeButton}>
						<ThemeSwitch />
					</div>
					<MobileNavButton handleChangeMenuOpen={handleChangeMenuOpen} isMenuOpen={isMenuOpen} />
					<MobileNav isOpen={isMenuOpen} onClose={handleChangeMenuOpen} />
				</div>
			</div>
		</header>
	)
}
