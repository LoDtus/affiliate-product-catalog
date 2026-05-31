import GallerySection from "@/features/detail/components/GallerySection";
import InfoSection from "@/features/detail/components/InfoSection";
import PurchaseSection from "@/features/detail/components/PurchaseSection";
import RelatedSection from "@/features/detail/components/RelatedSection";

export default function ProductDetail() {
    return (
        <div className="p-2">
            <div className="flex gap-2">
                <GallerySection/>
                <PurchaseSection/>
            </div>

            <InfoSection/>
            <RelatedSection/>
        </div>
    )
}