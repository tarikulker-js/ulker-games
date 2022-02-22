import ApkFile from '../Apps/QatarTube-v1.1.3.apk';

export default function BigMeetingScreen() {
    return (
        <>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">QatarTube</span>
                            <p>Ulker Software tarafından bir video izleme platformu. Şimdilik sadece Android'de!</p>
                        </div>
                        <div class="card-action">
                            <a href={ApkFile} download>İndir</a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}