import ToggleComponent from "./hooks/useToggle/ToggleComponent"
import TimeoutComponent from "./hooks/useTimeout/TimeoutComponent"
import DebounceComponent from "./hooks/useDebounce/DebounceComponent"
import UpdateEffectComponent from "./hooks/useUpdateEffect/UpdateEffectComponent"
import ArrayComponent from "./hooks/useArray/ArrayComponent"
import PreviousComponent from "./hooks/usePrevious/PreviousComponent"
import StateWithHistoryComponent from "./hooks/useStateWithHistory/StateWithHistoryComponent"
import StorageComponent from "./hooks/useStorage/StorageComponent"
import AsyncComponent from "./hooks/useAsync/AsyncComponent"
import FetchComponent from "./hooks/useFetch/FetchComponent"
import ScriptComponent from "./hooks/useScript/ScriptComponent"
import DeepCompareEffectComponent from "./hooks/useDeepCompareEffect/DeepCompareEffectComponent"
import EventListenerComponent from "./hooks/useEventListener/EventListenerComponent"
import OnScreenComponentComponent from "./hooks/useOnScreen/OnScreenComponent"
import WindowSizeComponent from "./hooks/useWindowSize/WindowSizeComponent"
import MediaQueryComponent from "./hooks/useMediaQuery/MediaQueryComponent"
import GeolocationComponent from "./hooks/useGeolocation/GeolocationComponent"
import StateWithValidationComponent from "./hooks/useStateWithValidation/StateWithValidationComponent"
import EffectOnceComponent from "./hooks/useEffectOnce/EffectOnceComponent"
import ClickOutsideComponent from "./hooks/useClickOutside/ClickOutsideComponent"
import DarkModeComponent from "./hooks/useDarkMode/DarkModeComponent"
import CopyToClipboardComponent from "./hooks/useCopyToClipboard/CopyToClipboardComponent"
import CookieComponent from "./hooks/useCookie/CookieComponent"
import TranslationComponent from "./hooks/useTranslation/TranslationComponent"
import OnlineStatusComponent from "./hooks/useOnlineStatus/OnlineStatusComponent"
import RenderCountComponent from "./hooks/useRenderCount/RenderCountComponent"
import DebugInformationComponent from "./hooks/useDebugInformation/DebugInformationComponent"
import HoverComponent from "./hooks/useHover/HoverComponent"
import LongPressComponent from "./hooks/useLongPress.js/LongPressComponent"
import './hooks.css'
const App = () => {

   return(
    <div>
        <div className="hooksContainer">
            <ToggleComponent />
        </div>

        <div className="hooksContainer">
            <TimeoutComponent />
        </div>

        <div className="hooksContainer">
            <DebounceComponent />
        </div>

        <div className="hooksContainer">
            <UpdateEffectComponent />
        </div>

        <div className="hooksContainer">
            <ArrayComponent />
        </div>

        <div className="hooksContainer">
            <PreviousComponent />
        </div>

        <div className="hooksContainer">
            <StateWithHistoryComponent />
        </div>

        <div className="hooksContainer">
            <StorageComponent />
        </div>

        <div className="hooksContainer">
            <AsyncComponent />
        </div>

        <div className="hooksContainer">
            <FetchComponent />
        </div>

        <div className="hooksContainer">
            <ScriptComponent />
        </div>

        <div className="hooksContainer">
            <DeepCompareEffectComponent />
        </div>

        <div className="hooksContainer">
            <EventListenerComponent />
        </div>

        <div className="hooksContainer">
            <OnScreenComponentComponent />
        </div>

        <div className="hooksContainer">
            <WindowSizeComponent />
        </div>

        <div className="hooksContainer">
            <MediaQueryComponent />
        </div>

        <div className="hooksContainer">
            <GeolocationComponent />
        </div>

        <div className="hooksContainer">
            <StateWithValidationComponent />
        </div>

        <div className="hooksContainer">
            <EffectOnceComponent />
        </div>

        <div className="hooksContainer">
            <ClickOutsideComponent />
        </div>

        <div className="hooksContainer">
            <DarkModeComponent />
        </div>

        <div className="hooksContainer">
            <CopyToClipboardComponent />
        </div>

        <div className="hooksContainer">
            <CookieComponent />
        </div>

        <div className="hooksContainer">
            <TranslationComponent />
        </div>

        <div className="hooksContainer">
            <OnlineStatusComponent />
        </div>

        <div className="hooksContainer">
            <RenderCountComponent />
        </div>

        <div className="hooksContainer">
            <DebugInformationComponent />
        </div>

        <div className="hooksContainer">
            <HoverComponent />
        </div>

        <div className="hooksContainer">
            <LongPressComponent />
        </div>
      
    </div>
   )
}

export default App
