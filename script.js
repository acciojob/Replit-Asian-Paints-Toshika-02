//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const gridContainer = document.getElementById('grid-container');
    const inputBlockId = document.getElementById('block_id');
    const inputColor = document.getElementById('colour_id');
    const changeButton = document.getElementById('change_button');
    const resetButton = document.getElementById('Reset');

    // Add event listener to the Change color button
    changeButton.addEventListener('click', function() {
        const blockId = inputBlockId.value;
        const color = inputColor.value;

        // Validate input block ID
        if (!isValidBlockId(blockId)) {
            alert('Invalid block ID. Please enter a number from 1 to 9.');
            return;
        }

        // Validate color input
        if (!isValidColor(color)) {
            alert('Invalid color format. Please enter a valid CSS color.');
            return;
        }

        // Change color of the specified block
        const block = document.getElementById(blockId);
        if (block) {
            // Reset background color of all grid items
            resetBackgroundColors();
            block.style.backgroundColor = color;
        } else {
            alert('Block with ID ' + blockId + ' not found.');
        }
    });

    // Add event listener to the Reset button
    resetButton.addEventListener('click', resetBackgroundColors);

    // Function to reset background color of all grid items
    function resetBackgroundColors() {
        const gridItems = document.getElementsByClassName('grid-item');
        for (let i = 0; i < gridItems.length; i++) {
            gridItems[i].style.backgroundColor = 'transparent';
        }
    }

    // Function to validate block ID input
    function isValidBlockId(blockId) {
        return /^\d$/.test(blockId) && parseInt(blockId) >= 1 && parseInt(blockId) <= 9;
    }

    // Function to validate color input
    function isValidColor(color) {
        const s = new Option().style;
        s.color = color;
        return s.color !== '';
    }
});
