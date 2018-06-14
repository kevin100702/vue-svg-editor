const svgStr = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" 
    :x="x" :y="y" :width="width" :height="height"
    preserveAspectRatio="xMidYMid meet"
	  >
<path style="fill:#F5A623;" d="M50,12.5c6.832,0,13.23,1.836,18.747,5.028l6.25-10.824C67.642,2.448,59.109,0,50,0
	c-9.109,0-17.641,2.448-24.996,6.704l6.249,10.824C36.769,14.336,43.168,12.5,50,12.5z"/>
<path style="fill:#FF3F00;" d="M0,50h12.5c0-13.879,7.546-25.988,18.753-32.473L25.004,6.704C10.061,15.35,0,31.495,0,50z"/>
<path style="fill:#4EE898;" d="M87.5,50H100c0-18.505-10.061-34.65-25.003-43.296l-6.25,10.824C79.954,24.012,87.5,36.121,87.5,50z"/>
<polygon id="gauge-needle" style="fill:#2E2E2E;" points="57.071,50 50,57.071 42.929,50 50,4.472" :transform="valRotate"/>
</svg>
`
export default svgStr
