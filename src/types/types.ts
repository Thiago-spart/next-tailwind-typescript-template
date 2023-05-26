import {
  componentStatuses,
  componentColors,
  componentPositions,
  componentSizes,
  componentShapes,
  bgColors,
  brandColors,
} from './constants'
import { DEFAULT_THEMES } from './defaultThemes'

export type DataThemeProps = typeof DEFAULT_THEMES[number] | string

export interface ComponentBaseProps {
  dataTheme?: DataThemeProps
}

export type ComponentColorProps = typeof componentColors[number]

export type ComponentPositionProps = typeof componentPositions[number]
export type ComponentShapeProps = typeof componentShapes[number]
export type ComponentSizeProps = typeof componentSizes[number]
export type ComponentStatusProps = typeof componentStatuses[number]
export type ComponentBrandColorsProps = typeof brandColors[number]
export type ComponentBgColorsProps = typeof bgColors[number]
