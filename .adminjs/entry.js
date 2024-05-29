AdminJS.UserComponents = {}
AdminJS.env.STORYBOOK_URL = undefined
AdminJS.env.GITHUB_URL = "https://github.com"
AdminJS.env.SLACK_URL = undefined
AdminJS.env.DOCUMENTATION_URL = undefined
import Version from '../dist/admin/components/top-bar'
AdminJS.UserComponents.Version = Version
import Login from '../dist/admin/components/login'
AdminJS.UserComponents.Login = Login
import SidebarResourceSection from '../dist/admin/components/sidebar-resource-section'
AdminJS.UserComponents.SidebarResourceSection = SidebarResourceSection
import CustomAction from '../dist/admin/components/dont-touch-this-action'
AdminJS.UserComponents.CustomAction = CustomAction
import DetailedStats from '../dist/admin/components/detailed-stats'
AdminJS.UserComponents.DetailedStats = DetailedStats
import Thumb from '../dist/admin/components/thumb'
AdminJS.UserComponents.Thumb = Thumb
import CustomPage from '../dist/admin/pages/custom-page'
AdminJS.UserComponents.CustomPage = CustomPage
import DesignSystemPage from '../dist/admin/pages/design-system-examples/index'
AdminJS.UserComponents.DesignSystemPage = DesignSystemPage