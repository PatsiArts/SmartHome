
import {concatStyleClass} from "@/lib/appStyleApi";
import BaseContainer, {BaseContainerProps} from "@/components/basic/layout/BaseContainer";
import BaseBlock from "@/components/basic/layout/BaseBlock";

interface ScrollableContainerProps extends BaseContainerProps {}

const ScrollableContainer = ({ children, styleClass, ...props }: ScrollableContainerProps) => {
    return (
        // <BaseContainer>
            <BaseBlock scrollable={true} styleClass={styleClass}>
                {children}
            </BaseBlock>
        // </BaseContainer>
    )
}

export default ScrollableContainer;