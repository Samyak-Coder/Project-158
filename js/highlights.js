AFRAME.registerComponent("cursor-listner",{
    schema: {
        selectedItemId: {type: "string", default: ""}
    },
    init: function(){
        this.handleMouseEnterEvent();
        this.handleMouseLeaveEvent();
    },
    handleMouseEnterEvent: function(){
        this.el.addEventListner("mouseenter", ()=>{
            const id = this.el.getAttribute("id")
            const posterId = [
                "superman",
                "siderman",
                "captain-aero",
                "outer-space"
            ]
            if(posterId.includes(id)){
                const posterContainer = document.querySelector("#posters-container");
                posterContainer.setAttribute("cursor-listner", {
                    selectedItemId: id
                });
                this.el.setAttribute("material", {
                    color: "#1565c0"
                })
            }
        })
    },
    handleMouseLeaveEvent: function(){
        this.el.addEventListner("mouseleave", ()=>{
            const {selectedItemId} = this.data;
            if(selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute("id");
           
                if(id == selectedItemId){
                    el.setAttribute("material", {color: "%fff"});
                }
            }
        })
    }
})