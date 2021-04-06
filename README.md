# simple-react-carousel
 A simple react carousel that accepts all HTML content and is responsive. 
 
 How to install: 
 
 1) Download the repo
 2) Run "npm install"
 3) After the dependencies have been installed, run "npm start"


 The app should open at localhost:8080, and should be immediately usable. There's a demo included, which is what you see when you run the app, but it is easy to make your own slide as well. 


INSTRUCTIONS:

SETUP: 

To set up the carousel, place the <CarouselWrapper> </CarouselWrapper> component where you want the carousel to be,
and then place the <Slide> </Slide> components within the wrapper component. 

The <Slide> component must surround the items you wish to place in the carousel, as it standardizes the width/height and prevents issues with different
sized elements. NOTE: the "show" prop is mandatory. It sets how many slides can be seen on the screen at once. 

It should look like this: 

    <CarouselWrapper show={1}> 
        <Slide>
            <any HTML element>
        </Slide>
        <Slide>
            <any HTML element>
        </Slide>
        <Slide>
            <any HTML element>
        </Slide>
    </CarouselWrapper>

The number of HTML elements is not limited and can be added simply by placing another <Slide> component within 
the <CarouselWrapper> component. The minimal setup doesn't require any styling of the carousel, as it will automatically occupy 
100% width and height of its parent container. 



    THE COMPONENTS: 

    <CarouselWrapper> is a functional component that surrounds the whole carousel. It is highly customizable using props, which will be listed below. 
    By default, the wrapper has width and height of 100%, with no padding or margins. However, this can be modified easily.  
    !NOTE: all props in this component accept values in the form of strings containing the desired values and units. For example,
    {outerHeight = "100px"} or {outerWidth = "50%"}

    <CarouselWrapper> has two props you can use to modify it:

    {outerHeight = "" and outerWidth = ""} both determine the width and height of the outer container of the carousel. 
    This determines its dimensions relative to its parent component. Note that the outer container is a grid container
    which makes it easy to position the inner container of the carousel. 

    {outerPadding = ""} is used to give the carousel some padding. To ensure that there are no problems with overflow,
    make sure that the sum of the padding + outerWidth/outerHeight values is always 100%. Normally, there is no need for this prop,
    as the padding can be more reliably added by defining the width/height of the inner container within the outer container's grid.
    This should only be used if you want to have asymmetrical padding. 

    {innerHeight = "" and innerHeight = ""} determine the height and with of the inner container. By default, they are 100%, and 
    the inner container is centerd within the outer container. You can add padding to the carousel by making the inner container smaller
    than the outer container. 

    {show={}} is a prop that sets the number of slides visible ont the screen at once. Only works on desktop devices, on tablet and mobile devices
    only one slide can be shown at once. IT IS MANDATORY TO USE THIS, set it to 1 if you want only 1 slide to show up on the screen at once. 
    


    <Slide> is a functional component that should surround the content you want to be within the slide. It's a grid 
    container which makes position the contents of the slide easy. It has two props: 

    {slideHeight = "" and slideWidth = ""} determine the height and width of individual slide containers. By default the
    width and height is set to 100%. This can be used to individually modify the dimensions of the inner slide. 

    {slideInnerHeight = "" and slideInnerWidth = ""} determine the height and width of the inner slide container. 
    The parent slide container is a grid container, so padding can be added to individual slides by making the inner slide
    container's width and height less than the outer slide containers width and height. 
    
    {slideDisplay = ""} allows the user to set the display type of the slides to "grid", "flex", "block" or "inline".
    By default, the slides are block containers. 


    Using these props, the slide can be modified to fit your needs very easily and with minimal setup. 


    RESPONSIVENESS:

    The carousel turns from a button-operated carousel to a swipe-operated carousel when used on tablet and smartphone devices. It always displays 1 slide at once on tablets and mobile devices. 
    The sizing of the carousel can be altered by using the built-in breakpoint constant, which can also be modified. 
    You can create inline styles and then pass these styles as props to the selected element of the carousel depending on the breakpoint. 
    You can also modify the container inside of which the carousel is to achieve similar results. 
