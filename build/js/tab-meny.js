var meny_link = document.querySelectorAll(".showcase__item")

		
	for(var i = 0; i < meny_link.length; i++){
		tab_meny(i)
	}

	function tab_meny(item){
				
		meny_link[item].addEventListener("click", function(evt){
			evt.preventDefault()
					
			for(var t = 0; t < meny_link.length; t++){
				meny_link[t].classList.remove('showcase__item--current')
		    }

				this.classList.add('showcase__item--current')
		})
	}