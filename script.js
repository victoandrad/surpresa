(function() {
    "use strict"

    const buttons = document.getElementById("buttons")
    const agree_button = document.getElementById("agree-button")
    const decline_button = document.getElementById("decline-button")
    const feedback = document.getElementById("feedback")

    agree_button.addEventListener("click", function() {
        feedback.style.display = "block"
        buttons.appendChild(decline_button)
        player.playVideo()
    })

    decline_button.addEventListener("mouseover", function() {
        let position_x = Math.floor(Math.random() * 90)
        let position_y = Math.floor(Math.random() * 90)

        console.log(position_x, position_y)

        document.body.appendChild(decline_button)
        decline_button.style.position = "absolute"
        decline_button.style.left = `${position_x}%`
        decline_button.style.top = `${position_y}%`
    })

})()