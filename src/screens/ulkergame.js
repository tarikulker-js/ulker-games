import ApkFile from '../Apps/ZipZipUlkerGame_v1.5.apk';

export default function ZipZipUlkerGameScreen() {
    return (
        <>
            <div class="row">
                <div class="col s12 m6">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <span class="card-title">ZıpZıpUlker</span>
                            <p>Ulker Games tarafından bir mobil oyun. Şimdilik sadece Android'de!</p>
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