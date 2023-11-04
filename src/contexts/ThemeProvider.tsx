'use client'

import Script from 'next/script'
import { createContext, memo, ReactNode, useContext } from 'react'

import { useTheme } from '../hooks/useTheme'

type DispatchType = {
	handleChangeTheme: (theme: 'light' | 'dark' | 'system') => void
}

export const ThemeStateContext = createContext<{ state: 'light' | 'dark' | 'system' | null }>({ state: null })
export const ThemeDispatchContext = createContext<DispatchType>({ handleChangeTheme: () => {} })

// テーマのちらつき防止
const _ThemeScript = () => {
	return (
		<script
			type="text/javascript"
			dangerouslySetInnerHTML={{
				__html: `
					window.addEventListener('DOMContentLoaded', () => {
						const storageTheme = window.localStorage.getItem('theme')
						const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
						const root = window.document.documentElement

						console.log('DOMContentLoaded context')

						root.setAttribute('data-theme', storageTheme === 'system' ? (isDark ? 'dark' : 'light') : storageTheme || 'dark')
					})
			`,
			}}
		/>
	)
}

const ThemeScript = memo(_ThemeScript, () => true)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const { theme, handleChangeTheme } = useTheme()

	return (
		<ThemeStateContext.Provider value={{ state: theme }}>
			<Script
				onReady={() => {
					console.log('onReady context')
				}}
				onLoad={() => {
					console.log('onLoad context')
				}}
				onError={() => {
					console.log('onError context')
				}}
			/>
			<ThemeScript />
			<ThemeDispatchContext.Provider value={{ handleChangeTheme }}>{children}</ThemeDispatchContext.Provider>
		</ThemeStateContext.Provider>
	)
}

export function useThemeState() {
	return useContext(ThemeStateContext)
}

export function useThemeDispatch() {
	return useContext(ThemeDispatchContext)
}
