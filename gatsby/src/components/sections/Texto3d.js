import React, { Component} from 'react'
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import styled from 'styled-components'
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
import { extend } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'


extend({ TextGeometry })


class RenderCarton extends Component {
	componentDidMount() {
		// === THREE.JS CODE START ===
		var mixer;
        // Scene
        var scene = new THREE.Scene()

        scene.position.x = 1.7
        scene.rotation.z = .2
        scene.rotation.x = 0.5
        scene.rotation.y = .5

        var sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        /**
 * Renderer
 */
    var renderer = new THREE.WebGLRenderer({alpha:true,antialias:true});
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );


        


		// Base camera
            var camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
            camera.position.x = 0
            camera.position.y = 0
            camera.position.z = 6
            camera.rotation.y = 15
            scene.add(camera)

            
		this.mount.appendChild( renderer.domElement );

	
        var group = new THREE.Group()
        scene.add(group)


        const fontLoader = new FontLoader()

        fontLoader.load(
            '/fonts/vt323.json',
    (font) => {
        const textElGeometry = new TextGeometry(
            'el',
            {
                font,
                size: 1.7,
                height: 0.1,
                curveSegments: 10,
                bevelEnabled: true,
                bevelThickness: 0.15,
                bevelSize: 0.05,
                bevelOffset: 0.04,
                bevelSegments: 5
            }
        )
        textElGeometry.center()
        group.add(textElGeometry)

        const materialText = new THREE.MeshNormalMaterial()
        materialText.flatShading= false
        const text = new THREE.Mesh(textElGeometry, materialText)
        scene.add(text)

    }
        )




        fontLoader.load(
            '/fonts/vt323.json',
    (font) => {
        const textProgramadorGeometry = new TextGeometry(
            'programador',
            {
                font,
                size: 1.2,
                height: 0.1,
                curveSegments: 10,
                bevelEnabled: true,
                bevelThickness: 0.15,
                bevelSize: 0.05,
                bevelOffset: 0,
                bevelSegments: 5
            }
        )
        group.add(textProgramadorGeometry)

        textProgramadorGeometry.center()
        textProgramadorGeometry.translate(0, -1.3, 0);

        const materialText = new THREE.MeshNormalMaterial()
        materialText.flatShading= false
        const text = new THREE.Mesh(textProgramadorGeometry, materialText)

        scene.add(text)

    }
)



fontLoader.load(
    '/fonts/vt323.json',
    (font) => {
        const textLuisGeometry = new TextGeometry(
            'Luis',
            {
                font,
                size: 1.7,
                height: 0.1,
                curveSegments: 10,
                bevelEnabled: true,
                bevelThickness: 0.15,
                bevelSize: 0.05,
                bevelOffset: 0.04,
                bevelSegments: 5
            }
        )
        group.add(textLuisGeometry)

        textLuisGeometry.center()
        textLuisGeometry.translate(0, 1.6, 0);


        // textGeometry.computeBoundingBox()
        // textGeometry.translate(
        //     - textGeometry.boundingBox.max.x * .5,
        //     - textGeometry.boundingBox.max.y * -1.5,
        //     - textGeometry.boundingBox.max.z * 15
        // )

        // textGeometry.computeBoundingBox()
        // textGeometry.translate(
        //     - (textGeometry.boundingBox.max.x - 0.02) * 0.5, // Subtract bevel size
        //     - (textGeometry.boundingBox.max.y - 0.02) * 0.5, // Subtract bevel size
        //     - (textGeometry.boundingBox.max.z - 0.03) * 0.5  // Subtract bevel thickness
        // )

        const material = new THREE.MeshNormalMaterial()

        const materialText = new THREE.MeshNormalMaterial()
        materialText.flatShading= false
        const text = new THREE.Mesh(textLuisGeometry, materialText)
        scene.add(text)





        const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45)


        for(let i = 0; i<1500; i++) {

            const donut = new THREE.Mesh(donutGeometry, material)

            donut.position.x = (Math.random() - 0.5) * 20 
            donut.position.y = (Math.random() - 0.5) * 20 
            donut.position.z = (Math.random() - 0.5) * 20 

            donut.rotation.x = Math.random() * Math.PI
            donut.rotation.y = Math.random() * Math.PI

            const scale = Math.random() * 0.2
            donut.scale.set(scale, scale, scale)



            scene.add(donut)

            
        }


        const materialCuadros = new THREE.MeshNormalMaterial()
        const cuadrosGeometry = new THREE.BoxGeometry()


        for(let i = 0; i<1500; i++) {
            const cuadros = new THREE.Mesh(cuadrosGeometry, materialCuadros)

            cuadros.position.x = (Math.random() - 0.5) * 20 
            cuadros.position.y = (Math.random() - 0.5) * 20 
            cuadros.position.z = (Math.random() - 0.5) * 20 

            cuadros.rotation.x = Math.random() * Math.PI
            cuadros.rotation.y = Math.random() * Math.PI

            const scale = Math.random() * 0.2
            cuadros.scale.set(scale, scale, scale)



            scene.add(cuadros)
        }



    }


)

window.addEventListener('resize', () =>
        {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

            
            })



        // Controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableZoom = false
    controls.enablePan = false


		const clock = new THREE.Clock();

		function animate() {

            const elapsedTime = clock.getElapsedTime()


			requestAnimationFrame( animate );
            scene.rotation.y = elapsedTime  * 0.02

			var delta = clock.getDelta();

			if ( mixer ) mixer.update( delta );

			renderer.render(scene,camera);
            controls.update();

		}

		animate();

		// === THREE.JS CODE END ===

	}

	render() {
		return (
			<>
				<Render ref={ref => (this.mount = ref)} />
            </>
		)
	}

}

const Render = styled.div`
`


export default RenderCarton
