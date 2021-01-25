import React, {Component} from 'react'
import "./css/modal.css"
class Modal extends Component {
    render(){
        return (
            <div>
                <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <p id = "robbetto">Ancora tangente e cotangente non sono supportate :(</p>
                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
            modal.style.display = "none";
        }
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
}

export default Modal
