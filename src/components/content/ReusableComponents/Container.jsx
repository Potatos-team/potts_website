
function Container(component) {
    return (
        <>
            <div class="relative mx-auto mt-20 w-full max-w-container px-4 sm:px-6 lg:px-8">
                {component.children}
            </div>
        </>
    );
}

export default Container;
