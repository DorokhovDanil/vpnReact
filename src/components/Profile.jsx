import "./../index.css";
import {
	TonConnectUIProvider,
	TonConnectButton,
	TonConnectUI,
} from "@tonconnect/ui-react";
import MainLogo from "./MainLogo";
import ImgButton from "./ImgButton";
import andr_apk from "./../images/andr_apk.svg";
import app_store from "./../images/app_store.svg";
import google_play from "./../images/google_play.svg";
import durev_logo from "./../images/durev_logo.svg";
const Profile = () => {
	return (
		<>
			<div class="content">
				<body>
					<div class="main_promo_view">
						<div class="container">
							<div class="container_view">
								<div class="promo_durev">
									<div class="content_vpn">
										<div class="title_logo">
											<img src={durev_logo} alt=""></img>
											<div class="title_logo_view">
												<p>welcome back</p>
												<div class="descr_view">
													<p>povel@durev.xyz</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="promo_durev">
									<button class="but_tonConnect">
										<div class="descr_but_tonConnect">connect a wallet</div>
									</button>

									<TonConnectButton />
								</div>
							</div>
						</div>
					</div>

					<div class="info">
						<img src="./images/buy_logo.svg" alt=""></img>
						<div class="title_buy">
							<span>
								Your subscription “2 years” will automatically renew on June 23,
								2025
								<a href="">Change subscription</a>
							</span>
						</div>
					</div>

					<div class="view_promo">
						<div class="freedom_view">
							<div class="desr_choose">
								<p>Step 1 - download your freedom</p>
							</div>

							<div class="footer_buttons">
								<ImgButton text="Download .APK" img={andr_apk} />
								<ImgButton text="App Store" img={app_store} />
								<ImgButton text="Google Play" img={google_play} />
							</div>
						</div>
						<div class="freedom_view">
							<div class="desr_choose">
								<p>Step 2 - copy&paste the key</p>
							</div>
							<div class="input_view">
								<textarea
									wrap="soft"
									cols="5"
									type="text"
									placeholder=""
								></textarea>
								<button>
									<div class="descr_but">copy</div>
								</button>
							</div>
						</div>
					</div>
					<MainLogo />
				</body>
			</div>
		</>
	);
};

export default Profile;
